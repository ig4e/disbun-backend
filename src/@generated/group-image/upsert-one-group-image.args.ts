import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';
import { Type } from 'class-transformer';
import { GroupImageCreateInput } from './group-image-create.input';
import { GroupImageUpdateInput } from './group-image-update.input';

@ArgsType()
export class UpsertOneGroupImageArgs {

    @Field(() => GroupImageWhereUniqueInput, {nullable:false})
    @Type(() => GroupImageWhereUniqueInput)
    where!: GroupImageWhereUniqueInput;

    @Field(() => GroupImageCreateInput, {nullable:false})
    @Type(() => GroupImageCreateInput)
    create!: GroupImageCreateInput;

    @Field(() => GroupImageUpdateInput, {nullable:false})
    @Type(() => GroupImageUpdateInput)
    update!: GroupImageUpdateInput;
}
