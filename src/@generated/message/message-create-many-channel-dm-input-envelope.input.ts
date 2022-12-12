import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyChannelDmInput } from './message-create-many-channel-dm.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManyChannelDmInputEnvelope {

    @Field(() => [MessageCreateManyChannelDmInput], {nullable:false})
    @Type(() => MessageCreateManyChannelDmInput)
    data!: Array<MessageCreateManyChannelDmInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
