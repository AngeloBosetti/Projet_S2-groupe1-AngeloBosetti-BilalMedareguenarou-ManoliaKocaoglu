/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Conversation = "conversation",
	DossierVac = "dossier_vac",
	Messages = "messages",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ConversationRecord = {
	message?: RecordIdString[]
	personnes?: RecordIdString[]
}

export type DossierVacRecord = {
	couverture?: string
	dateDebut?: IsoDateString
	dateFin?: IsoDateString
	images?: string[]
	personnes?: RecordIdString[]
	title?: string
}

export type MessagesRecord = {
	content?: string
	from?: RecordIdString
	readAt?: IsoDateString
	to?: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	firstName?: string
	friends?: RecordIdString[]
	lastName?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConversationResponse<Texpand = unknown> = Required<ConversationRecord> & BaseSystemFields<Texpand>
export type DossierVacResponse<Texpand = unknown> = Required<DossierVacRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	conversation: ConversationRecord
	dossier_vac: DossierVacRecord
	messages: MessagesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	conversation: ConversationResponse
	dossier_vac: DossierVacResponse
	messages: MessagesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'conversation'): RecordService<ConversationResponse>
	collection(idOrName: 'dossier_vac'): RecordService<DossierVacResponse>
	collection(idOrName: 'messages'): RecordService<MessagesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
