import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AttachmentMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    fileName?: true;

    @Field(() => Boolean, {nullable:true})
    contentType?: true;

    @Field(() => Boolean, {nullable:true})
    messageId?: true;
}
