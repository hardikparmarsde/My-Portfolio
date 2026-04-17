import { motion } from 'framer-motion';

export function Loader({ name }) {
  return (
    <div className="min-h-screen w-full grid place-items-center">
      <div className="relative">
        <motion.div
          className="absolute -inset-8 rounded-[28px] opacity-70 blur-2xl"
          animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'linear-gradient(90deg, rgba(106,119,200,0.55), rgba(141,154,215,0.40), rgba(80,90,178,0.55))',
            backgroundSize: '200% 200%',
          }}
        />
        <div className="glass-strong relative rounded-[22px] px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-ink-900 text-white dark:bg-white dark:text-ink-900 grid place-items-center">
              <span className="text-sm font-bold">{name.split(' ').map((w) => w[0]).join('')}</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-ink-900 dark:text-white">{name}</div>
              <div className="mt-1 flex items-center gap-2">
                <motion.div
                  className="h-1.5 w-28 rounded-full bg-ink-200/80 dark:bg-white/10 overflow-hidden"
                  initial={false}
                >
                  <motion.div
                    className="h-full w-16 rounded-full"
                    animate={{ x: [-18, 74, -18] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(106,119,200,0.0), rgba(106,119,200,0.9), rgba(106,119,200,0.0))',
                    }}
                  />
                </motion.div>
                <span className="text-xs text-ink-700 dark:text-white/65">Loading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

