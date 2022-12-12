import { registerEnumType } from '@nestjs/graphql';

export enum MessageAttatchmentScalarFieldEnum {
    id = "id",
    fileName = "fileName",
    contentType = "contentType",
    size = "size",
    messageId = "messageId"
}


registerEnumType(MessageAttatchmentScalarFieldEnum, { name: 'MessageAttatchmentScalarFieldEnum', description: undefined })
