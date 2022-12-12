import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelType } from '../prisma/channel-type.enum';

@InputType()
export class ChannelDmCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChannelType, {nullable:true})
    type?: keyof typeof ChannelType;
}
