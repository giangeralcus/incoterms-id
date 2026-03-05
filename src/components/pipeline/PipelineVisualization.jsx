import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Factory,
  Package,
  FileCheck,
  Container,
  Ship,
  Truck,
  Building2,
  Flag,
  Coins,
} from 'lucide-react'
import { PIPELINE_STAGES, INCOTERM_PIPELINE } from '../../data/pipeline'

const ICONS = { Factory, Package, FileCheck, Container, Ship, Truck, Building2 }

// Split pipeline into two rows for mobile: 5 top, 4 bottom
const TOP_ROW = PIPELINE_STAGES.slice(0, 5)
const BOTTOM_ROW = PIPELINE_STAGES.slice(5)

function getNodeRole(index, pipeline) {
  if (pipeline.seller.includes(index)) return 'seller'
  if (pipeline.buyer.includes(index)) return 'buyer'
  return 'neutral'
}

function NodeCircle({ stage, role, isRiskPoint, isCostPoint, incoterm }) {
  const Icon = ICONS[stage.icon]
  const bgColor =
    role === 'seller'
      ? 'bg-blue-500'
      : role === 'buyer'
        ? 'bg-orange-500'
        : 'bg-gray-300'

  const samePoint = isRiskPoint && isCostPoint

  return (
    <div className="flex flex-col items-center gap-1 relative">
      {/* Transfer markers above the node */}
      <div className="flex items-center justify-center gap-0.5 h-6">
        <AnimatePresence mode="popLayout">
          {isRiskPoint && (
            <motion.div
              key={`risk-${incoterm}-${stage.x}`}
              initial={{ opacity: 0, x: -12, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
              className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 border border-red-300"
              title="Risk Transfer"
            >
              <Flag className="w-3 h-3 text-red-600" />
            </motion.div>
          )}
          {isCostPoint && (
            <motion.div
              key={`cost-${incoterm}-${stage.x}`}
              initial={{ opacity: 0, x: -12, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: samePoint ? 0.3 : 0.2,
              }}
              className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 border border-green-300"
              title="Cost Transfer"
            >
              <Coins className="w-3 h-3 text-green-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Node circle */}
      <motion.div
        layout
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-2 ${bgColor} ${
          role === 'seller'
            ? 'border-blue-600'
            : role === 'buyer'
              ? 'border-orange-600'
              : 'border-gray-400'
        }`}
        initial={false}
        animate={{
          backgroundColor:
            role === 'seller'
              ? '#3B82F6'
              : role === 'buyer'
                ? '#F97316'
                : '#D1D5DB',
          borderColor:
            role === 'seller'
              ? '#2563EB'
              : role === 'buyer'
                ? '#EA580C'
                : '#9CA3AF',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {Icon && <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2} />}
      </motion.div>

      {/* Label */}
      <span className="text-[10px] leading-tight text-center text-gray-500 max-w-14 truncate">
        {stage.label}
      </span>
    </div>
  )
}

function ConnectorLine({ fromRole }) {
  // Color the connector by the "from" node's responsibility
  const color =
    fromRole === 'seller'
      ? 'bg-blue-400'
      : fromRole === 'buyer'
        ? 'bg-orange-400'
        : 'bg-gray-300'

  return (
    <motion.div
      className={`h-0.5 flex-1 min-w-3 self-center mt-3 rounded-full ${color}`}
      initial={false}
      animate={{
        backgroundColor:
          fromRole === 'seller'
            ? '#60A5FA'
            : fromRole === 'buyer'
              ? '#FB923C'
              : '#D1D5DB',
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    />
  )
}

function PipelineRow({ stages, pipeline, incoterm }) {
  return (
    <div className="flex items-start justify-between gap-0">
      {stages.map((stage, i) => {
        const role = getNodeRole(stage.x, pipeline)
        const isRiskPoint = pipeline.risk === stage.x
        const isCostPoint = pipeline.cost === stage.x

        // Connector line after each node except the last in this row
        const showConnector = i < stages.length - 1

        return (
          <div key={stage.id} className="contents">
            <NodeCircle
              stage={stage}
              role={role}
              isRiskPoint={isRiskPoint}
              isCostPoint={isCostPoint}
              incoterm={incoterm}
            />
            {showConnector && (
                <ConnectorLine
                  fromRole={role}
                />
              )}
          </div>
        )
      })}
    </div>
  )
}

export default function PipelineVisualization({ incoterm = 'FOB' }) {
  const pipeline = INCOTERM_PIPELINE[incoterm]

  const transferInfo = useMemo(() => {
    if (!pipeline) return null
    const riskStage = PIPELINE_STAGES[pipeline.risk]
    const costStage = PIPELINE_STAGES[pipeline.cost]
    const samePoint = pipeline.risk === pipeline.cost
    return { riskStage, costStage, samePoint }
  }, [pipeline])

  if (!pipeline || !transferInfo) return null

  return (
    <div className="space-y-3">
      {/* Desktop: single row (hidden on small screens) */}
      <div className="hidden sm:block">
        <div className="flex items-start justify-between gap-0 px-1">
          {PIPELINE_STAGES.map((stage, i) => {
            const role = getNodeRole(stage.x, pipeline)
            const isRiskPoint = pipeline.risk === stage.x
            const isCostPoint = pipeline.cost === stage.x
            const showConnector = i < PIPELINE_STAGES.length - 1

            return (
              <div key={stage.id} className="contents">
                <NodeCircle
                  stage={stage}
                  role={role}
                  isRiskPoint={isRiskPoint}
                  isCostPoint={isCostPoint}
                  incoterm={incoterm}
                />
                {showConnector && (
                  <ConnectorLine
                    fromRole={role}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile: two-row stacked layout (visible on small screens only) */}
      <div className="sm:hidden space-y-1">
        <PipelineRow
          stages={TOP_ROW}
          pipeline={pipeline}
          incoterm={incoterm}
        />
        {/* Vertical connector bridging the two rows */}
        <div className="flex justify-end pr-6">
          <motion.div
            className="w-0.5 h-4 rounded-full"
            initial={false}
            animate={{
              backgroundColor:
                getNodeRole(4, pipeline) === 'seller'
                  ? '#60A5FA'
                  : getNodeRole(4, pipeline) === 'buyer'
                    ? '#FB923C'
                    : '#D1D5DB',
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <PipelineRow
          stages={BOTTOM_ROW}
          pipeline={pipeline}
          incoterm={incoterm}
        />
      </div>

      {/* Transfer info text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={incoterm}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="text-xs text-gray-500 text-center space-y-0.5"
        >
          {transferInfo.samePoint ? (
            <p>
              Risk & Cost transfer at{' '}
              <span className="font-semibold text-gray-700">
                {transferInfo.riskStage.label}
              </span>
            </p>
          ) : (
            <>
              <p>
                <Flag className="w-3 h-3 text-red-500 inline-block mr-0.5 -mt-0.5" />
                Risk transfers at{' '}
                <span className="font-semibold text-gray-700">
                  {transferInfo.riskStage.label}
                </span>
              </p>
              <p>
                <Coins className="w-3 h-3 text-green-500 inline-block mr-0.5 -mt-0.5" />
                Cost transfers at{' '}
                <span className="font-semibold text-gray-700">
                  {transferInfo.costStage.label}
                </span>
              </p>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-1">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-blue-500" />
          <span className="text-[10px] text-gray-500">Seller</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-orange-500" />
          <span className="text-[10px] text-gray-500">Buyer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flag className="w-3 h-3 text-red-500" />
          <span className="text-[10px] text-gray-500">Risk Transfer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Coins className="w-3 h-3 text-green-500" />
          <span className="text-[10px] text-gray-500">Cost Transfer</span>
        </div>
      </div>
    </div>
  )
}
