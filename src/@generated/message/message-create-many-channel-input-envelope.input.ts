import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyChannelInput } from './message-create-many-channel.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManyChannelInputEnvelope {

    @Field(() => [MessageCreateManyChannelInput], {nullable:false})
    @Type(() => MessageCreateManyChannelInput)
    data!: Array<MessageCreateManyChannelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
