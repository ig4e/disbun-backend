import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyGroupChannelInput } from './message-create-many-group-channel.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManyGroupChannelInputEnvelope {

    @Field(() => [MessageCreateManyGroupChannelInput], {nullable:false})
    @Type(() => MessageCreateManyGroupChannelInput)
    data!: Array<MessageCreateManyGroupChannelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
