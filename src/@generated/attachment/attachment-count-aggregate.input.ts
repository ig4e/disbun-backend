import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AttachmentCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    fileName?: true;

    @Field(() => Boolean, {nullable:true})
    contentType?: true;

    @Field(() => Boolean, {nullable:true})
    messageId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
