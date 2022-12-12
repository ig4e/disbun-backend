import { registerEnumType } from '@nestjs/graphql';

export enum MessageReactionScalarFieldEnum {
    id = "id",
    emoji = "emoji",
    messageId = "messageId"
}


registerEnumType(MessageReactionScalarFieldEnum, { name: 'MessageReactionScalarFieldEnum', description: undefined })
