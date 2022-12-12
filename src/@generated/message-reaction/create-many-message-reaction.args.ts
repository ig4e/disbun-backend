import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageReactionCreateManyInput } from './message-reaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMessageReactionArgs {

    @Field(() => [MessageReactionCreateManyInput], {nullable:false})
    @Type(() => MessageReactionCreateManyInput)
    data!: Array<MessageReactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
