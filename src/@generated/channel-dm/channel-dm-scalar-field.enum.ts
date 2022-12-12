import { registerEnumType } from '@nestjs/graphql';

export enum ChannelDmScalarFieldEnum {
    id = "id",
    type = "type"
}


registerEnumType(ChannelDmScalarFieldEnum, { name: 'ChannelDmScalarFieldEnum', description: undefined })
