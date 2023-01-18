<template>
    <div class="user-form-wrapper">
        <Form :model="userInfo" ref="formValidate" :rules="ruleValidate" label-position="top" :hide-required-mark=true>
            <Row>
                <Col span="14">
                <FormItem label="用户名" prop="username">
                    <Input v-model="userInfo.username"></Input>
                </FormItem>
                </Col>
                <Col span="10">
                <div class="image-input-wrapper">
                    <img :src="userInfo.avatar" />
                    <Upload action="" :before-upload="uploadImg" :show-upload-list="false">
                        <label class="btn-circle up">
                            <i class="mdi mdi-pencil"></i>
                        </label>
                    </Upload>

                    <label class="btn-circle down" @click="cancelImg">
                        <i class="mdi mdi-close"></i>
                        <!-- <input type="file" name="avatar" /> -->
                    </label>
                    <!-- <Button type="primary" @click="save">上传头像</Button -->
                    <span>请上传Png、Jpg、Jpeg格式</span>
                </div>
                </Col>
            </Row>
            <Row>
                <Col span="14">
                <FormItem label="密码" prop="password">
                    <Input v-model="userInfo.password" type="password"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="14">
                <FormItem label="昵称" prop="nickname">
                    <Input v-model="userInfo.nickname"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="24">
                <Col span="12">
                <FormItem label="手机">
                    <Input v-model="userInfo.mobile"></Input>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="邮箱">
                    <Input v-model="userInfo.email"></Input>
                </FormItem>
                </Col>

            </Row>
            <Row :gutter="24">
                <Col span="12">
                <FormItem label="性别">
                    <Select v-model="userInfo.sex">
                        <Option v-for="item in sexOptions" :value="item.value" :key="item.value">{{ item.label }}
                        </Option>
                    </Select>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="状态">
                    <Select v-model="userInfo.status">
                        <Option v-for="item in statusOptions" :value="item.value" :key="item.value">{{ item.label }}
                        </Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="24">
                <Col span="12">
                <FormItem label="部门">
                    <tree-select :data="treeModelData" :modelValue.sync="userInfo.deptId"></tree-select>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="角色">
                    <Input v-model="userInfo.roleId"></Input>
                </FormItem>
                </Col>
            </Row>

            <FormItem label="简介">
                <Input type="textarea" :rows="3" v-model="userInfo.description"></Input>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import TreeSelect from '@/components/TreeSelect'
import { addOrUpdateUser, uploadImg } from '@/api/user'
import { fetchDeptTreeModel } from '@/api/dept'
export default {
    props: {
        userInfo: Object,
    },
    components: {
        TreeSelect
    },
    data() {
        return {
            treeModelData: [],
            sexOptions: [
                {
                    value: 'MALE',
                    label: '男'
                },
                {
                    value: 'FEMALE',
                    label: '女'
                },
                {
                    value: 'UNKNOWN',
                    label: '未知'
                }
            ],
            statusOptions: [
                {
                    value: 'VALID',
                    label: '启用'
                },
                {
                    value: 'LOCK',
                    label: '禁用'
                },
            ],
            ruleValidate: {
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                nickname: [
                    { required: true, message: '昵称不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        this.loadTreeModel()
    },
    methods: {
        loadTreeModel() {
            fetchDeptTreeModel().then(res => {
                this.treeModelData = res.data.data;
            });
        },
        search() {
            this.$emit("search")
        },
        save() {
            this.$refs['formValidate'].validate((valid) => {
                if (valid) {
                    addOrUpdateUser(this.userInfo)
                        .then(res => {
                            this.search()
                            this.$emit("cancel")
                            this.$Message.success('保存成功')
                        })
                }
            })
        },
        handleMenuTabs(name) {
            this.userInfo.type = name
        },
        uploadImg(file) {
            const isImg = file.type === "image/jpeg" || file.type === "image/png";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isImg) {
                this.$Message.error('上传头像图片只能是 JPG/PNG 格式!');
                return false
            }
            if (!isLt2M) {
                this.$Message.error('上传头像图片大小不能超过 2MB!');
                return false
            }
            let param = new FormData(); // 创建form对象
            param.append("file", file, file.name); // file对象是 beforeUpload参数
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            uploadImg(param, config)
                .then(res => {
                    this.userInfo.avatar = res.data.data;
                }).catch(ex => {
                    this.$Message.error('图片上传失败');
                });
        },
        cancelImg() {
            this.userInfo.avatar = 'https://preview.keenthemes.com/craft/assets/media/avatars/300-1.jpg'
        }
    }
}
</script>

<style lang="scss" scoped>
.user-form-wrapper {
    max-height: 450px;
    overflow-y: auto;
    overflow-x: hidden;

    .ivu-form {
        padding: 10px 20px;
    }

    .image-input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 30px;
        right: 30px;
        width: 160px;

        img {
            height: 160px;
            width: 160px;
            border-radius: 0.475rem;
            border: 3px solid #ffffff;
            box-shadow: 0 0.5rem 1.5rem 0.5rem #00000013;
        }

        span {
            font-size: 12px;
            color: #a1a5b7;
        }

        .ivu-col {
            padding-right: 12px;
        }

        .btn-circle {
            position: absolute;
            right: -8px;
            width: 25px;
            height: 25px;
            border-radius: 0.475rem;
            box-shadow: 0 0.5rem 1.5rem 0.5rem #00000013;
            background-color: #ffffff;


            i {
                position: relative;
                top: 3px;
                left: 5px;
                color: #A1A5B7;
            }


            input {
                width: 0px;
                height: 0px;
            }
        }

        .up {
            top: -10px;
        }

        .down {
            top: calc(100% - 55px);
        }
    }

}
</style>