import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    pinned = "pinned",
    content = "content",
    updatedAt = "updatedAt",
    createdAt = "createdAt",
    userId = "userId",
    refrenceId = "refrenceId",
    channelId = "channelId",
    groupChannelId = "groupChannelId"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
