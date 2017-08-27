// @flow

import db from '../src/db'

export const setupDatabase = () => db.migrate.latest().then(() => db.seed.run())
