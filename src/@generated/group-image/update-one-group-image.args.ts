import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageUpdateInput } from './group-image-update.input';
import { Type } from 'class-transformer';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';

@ArgsType()
export class UpdateOneGroupImageArgs {

    @Field(() => GroupImageUpdateInput, {nullable:false})
    @Type(() => GroupImageUpdateInput)
    data!: GroupImageUpdateInput;

    @Field(() => GroupImageWhereUniqueInput, {nullable:false})
    @Type(() => GroupImageWhereUniqueInput)
    where!: GroupImageWhereUniqueInput;
}
