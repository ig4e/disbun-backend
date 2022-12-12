import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageUpdateManyMutationInput } from './group-image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GroupImageWhereInput } from './group-image-where.input';

@ArgsType()
export class UpdateManyGroupImageArgs {

    @Field(() => GroupImageUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupImageUpdateManyMutationInput)
    data!: GroupImageUpdateManyMutationInput;

    @Field(() => GroupImageWhereInput, {nullable:true})
    @Type(() => GroupImageWhereInput)
    where?: GroupImageWhereInput;
}
