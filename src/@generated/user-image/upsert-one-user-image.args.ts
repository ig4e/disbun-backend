import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { Type } from 'class-transformer';
import { UserImageCreateInput } from './user-image-create.input';
import { UserImageUpdateInput } from './user-image-update.input';

@ArgsType()
export class UpsertOneUserImageArgs {

    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: UserImageWhereUniqueInput;

    @Field(() => UserImageCreateInput, {nullable:false})
    @Type(() => UserImageCreateInput)
    create!: UserImageCreateInput;

    @Field(() => UserImageUpdateInput, {nullable:false})
    @Type(() => UserImageUpdateInput)
    update!: UserImageUpdateInput;
}
