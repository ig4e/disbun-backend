import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttachmentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    fileName?: string;

    @Field(() => String, {nullable:true})
    contentType?: string;

    @Field(() => String, {nullable:true})
    messageId?: string;
}
