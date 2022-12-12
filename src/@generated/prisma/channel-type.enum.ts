import { registerEnumType } from '@nestjs/graphql';

export enum ChannelType {
    DM = "DM",
    GROUP = "GROUP"
}


registerEnumType(ChannelType, { name: 'ChannelType', description: undefined })
