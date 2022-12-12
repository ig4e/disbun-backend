import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageAttatchmentCreateManyMessageInput } from './message-attatchment-create-many-message.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageAttatchmentCreateManyMessageInputEnvelope {

    @Field(() => [MessageAttatchmentCreateManyMessageInput], {nullable:false})
    @Type(() => MessageAttatchmentCreateManyMessageInput)
    data!: Array<MessageAttatchmentCreateManyMessageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
