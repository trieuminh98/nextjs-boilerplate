import type {} from '@redux-devtools/extension' // required for devtools typing
import { create, type StateCreator } from 'zustand'
import { devtools, persist, type PersistOptions } from 'zustand/middleware'

export const createWithPersist = <T>(
  initializer: StateCreator<T, [['zustand/devtools', never], ['zustand/persist', unknown]]>,
  options: PersistOptions<T, T>
) => create<T>()(devtools(persist(initializer, options)))
