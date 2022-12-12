import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessageReactionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
