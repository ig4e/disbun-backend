import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from './channel-type.enum';

@InputType()
export class EnumChannelTypeFieldUpdateOperationsInput {

    @Field(() => ChannelType, {nullable:true})
    set?: keyof typeof ChannelType;
}
