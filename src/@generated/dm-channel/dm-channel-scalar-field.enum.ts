import { registerEnumType } from '@nestjs/graphql';

export enum DmChannelScalarFieldEnum {
    id = "id",
    userRelationRelatedUserId = "userRelationRelatedUserId",
    userRelationUserId = "userRelationUserId"
}


registerEnumType(DmChannelScalarFieldEnum, { name: 'DmChannelScalarFieldEnum', description: undefined })
