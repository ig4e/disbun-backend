import { registerEnumType } from '@nestjs/graphql';

export enum AttachmentScalarFieldEnum {
    id = "id",
    fileName = "fileName",
    contentType = "contentType",
    messageId = "messageId"
}


registerEnumType(AttachmentScalarFieldEnum, { name: 'AttachmentScalarFieldEnum', description: undefined })
