import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupImageCreateWithoutGroupInput } from './group-image-create-without-group.input';
import { Type } from 'class-transformer';
import { GroupImageCreateOrConnectWithoutGroupInput } from './group-image-create-or-connect-without-group.input';
import { GroupImageUpsertWithoutGroupInput } from './group-image-upsert-without-group.input';
import { GroupImageWhereUniqueInput } from './group-image-where-unique.input';
import { GroupImageUpdateWithoutGroupInput } from './group-image-update-without-group.input';

@InputType()
export class GroupImageUncheckedUpdateOneWithoutGroupNestedInput {

    @Field(() => GroupImageCreateWithoutGroupInput, {nullable:true})
    @Type(() => GroupImageCreateWithoutGroupInput)
    create?: GroupImageCreateWithoutGroupInput;

    @Field(() => GroupImageCreateOrConnectWithoutGroupInput, {nullable:true})
    @Type(() => GroupImageCreateOrConnectWithoutGroupInput)
    connectOrCreate?: GroupImageCreateOrConnectWithoutGroupInput;

    @Field(() => GroupImageUpsertWithoutGroupInput, {nullable:true})
    @Type(() => GroupImageUpsertWithoutGroupInput)
    upsert?: GroupImageUpsertWithoutGroupInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GroupImageWhereUniqueInput, {nullable:true})
    @Type(() => GroupImageWhereUniqueInput)
    connect?: GroupImageWhereUniqueInput;

    @Field(() => GroupImageUpdateWithoutGroupInput, {nullable:true})
    @Type(() => GroupImageUpdateWithoutGroupInput)
    update?: GroupImageUpdateWithoutGroupInput;
}
