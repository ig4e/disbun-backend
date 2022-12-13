import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DmChannelCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userRelationRelatedUserId!: string;

    @Field(() => String, {nullable:false})
    userRelationUserId!: string;
}
