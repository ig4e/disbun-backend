import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessageAttatchmentMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    fileName?: true;

    @Field(() => Boolean, {nullable:true})
    contentType?: true;

    @Field(() => Boolean, {nullable:true})
    size?: true;

    @Field(() => Boolean, {nullable:true})
    messageId?: true;
}
