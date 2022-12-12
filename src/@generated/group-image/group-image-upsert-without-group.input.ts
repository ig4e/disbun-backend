import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageUpdateWithoutGroupInput } from './group-image-update-without-group.input';
import { Type } from 'class-transformer';
import { GroupImageCreateWithoutGroupInput } from './group-image-create-without-group.input';

@InputType()
export class GroupImageUpsertWithoutGroupInput {

    @Field(() => GroupImageUpdateWithoutGroupInput, {nullable:false})
    @Type(() => GroupImageUpdateWithoutGroupInput)
    update!: GroupImageUpdateWithoutGroupInput;

    @Field(() => GroupImageCreateWithoutGroupInput, {nullable:false})
    @Type(() => GroupImageCreateWithoutGroupInput)
    create!: GroupImageCreateWithoutGroupInput;
}
