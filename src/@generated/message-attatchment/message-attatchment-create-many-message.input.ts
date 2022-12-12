import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MessageAttatchmentCreateManyMessageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => String, {nullable:true})
    contentType?: string;

    @Field(() => Int, {nullable:false})
    size!: number;
}
