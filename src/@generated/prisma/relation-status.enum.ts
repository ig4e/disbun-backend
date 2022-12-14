import { registerEnumType } from '@nestjs/graphql';

export enum RelationStatus {
    NONE = "NONE",
    PENDING_INCOMING = "PENDING_INCOMING",
    PENDING_OUTGOING = "PENDING_OUTGOING",
    FRIENDS = "FRIENDS",
    BLOCKED = "BLOCKED"
}


registerEnumType(RelationStatus, { name: 'RelationStatus', description: undefined })
