import { eq } from "drizzle-orm"
import { db } from "../../db"
import { notes } from "../../db/schema"

export const getNotes = async () => {
  return db.query.notes.findMany()
}

// Stubs to keep build working until implemented with database
export const getNoteById = (_id: number) => {
  return undefined as { id: number; content: string; important: boolean } | undefined
}

export const addNote = (_content: string, _important: boolean) => {}

export const toggleImportance = (_id: number) => {}