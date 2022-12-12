import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRelationStatusFilter } from '../prisma/enum-relation-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserRelationScalarWhereInput {

    @Field(() => [UserRelationScalarWhereInput], {nullable:true})
    AND?: Array<UserRelationScalarWhereInput>;

    @Field(() => [UserRelationScalarWhereInput], {nullable:true})
    OR?: Array<UserRelationScalarWhereInput>;

    @Field(() => [UserRelationScalarWhereInput], {nullable:true})
    NOT?: Array<UserRelationScalarWhereInput>;

    @Field(() => EnumRelationStatusFilter, {nullable:true})
    status?: EnumRelationStatusFilter;

    @HideField()
    relatedUserId?: StringFilter;

    @HideField()
    userId?: StringFilter;
}
