import { registerEnumType } from '@nestjs/graphql';

export enum ChannelScalarFieldEnum {
    id = "id",
    type = "type"
}


registerEnumType(ChannelScalarFieldEnum, { name: 'ChannelScalarFieldEnum', description: undefined })
