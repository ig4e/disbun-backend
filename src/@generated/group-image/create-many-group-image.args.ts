import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupImageCreateManyInput } from './group-image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGroupImageArgs {

    @Field(() => [GroupImageCreateManyInput], {nullable:false})
    @Type(() => GroupImageCreateManyInput)
    data!: Array<GroupImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
