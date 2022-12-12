import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AttachmentCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => String, {nullable:true})
    contentType?: string;

    @Field(() => String, {nullable:false})
    messageId!: string;
}
