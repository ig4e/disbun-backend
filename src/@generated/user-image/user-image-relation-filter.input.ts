import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageWhereInput } from './user-image-where.input';

@InputType()
export class UserImageRelationFilter {

    @Field(() => UserImageWhereInput, {nullable:true})
    is?: UserImageWhereInput;

    @Field(() => UserImageWhereInput, {nullable:true})
    isNot?: UserImageWhereInput;
}
