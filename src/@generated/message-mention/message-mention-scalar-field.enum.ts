import { registerEnumType } from '@nestjs/graphql';

export enum MessageMentionScalarFieldEnum {
    id = "id",
    messageId = "messageId"
}


registerEnumType(MessageMentionScalarFieldEnum, { name: 'MessageMentionScalarFieldEnum', description: undefined })
