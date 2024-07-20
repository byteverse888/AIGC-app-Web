<template>
  <div class="painting-container">
    <div class="w-[755px] h-screen border-solid sub-sidebar white-500 left-container bg-white">
        <div class="painting-description">
            <div class="setting-row mb-[15px] p-3">
                <div class="setting-item w-full bg-[#eff0f0] pt-0.625rem pr-1.25rem pb-1.25rem pl-1.25rem rounded-xl">
                    <el-row class="flex flex-col items-start">
                        <div class="header w-full flex justify-between mb-5">
                            <div><span>* 画面描述</span></div>
                            <div>
                                <el-button>重置</el-button>
                            </div>
                        </div>
                        <div class="words-cate flex flex-wrap pb-3">
                            <div class="item bg-[#d4dad6] m-1 rounded p-1" v-for="(item, index) in paintTypesArr" :key="index">
                                <span class="">{{item.label}}</span>
                            </div>
                        </div>
                        <div class="words-input w-full relative h-[53px]">
                            <textarea autocomplete="off" placeholder="输入自定义画面描述" autofocus="autofocus" maxlength="1000" class="w-full"
                                style="min-height: 53px; height: 53px; border: 1px solid #dcdfe6; border-radius: 4px; padding: 5px 15px; font-size: 14px;">
                            </textarea>
                            <el-button
                                class="btn-add absolute h-[36px] right-2 bottom-1/7 text-xs" 
                                style="background-color: #e3f5f0 !important;border-color: #e3f5f0 !important; color: #10a37f !important;" 
                            >
                                添加到描述
                            </el-button>
                        </div>
                    </el-row>
                </div>
            </div>
        </div>
        
        <div class="reference-picture mb-[15px] p-1.25 flex justify-between">

        </div>

        <div class="chart-weight mb-[15px] p-1.25 flex justify-between">

        </div>
    </div>
    <div class="flex-1 h-full border-solid main-wrapper">

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {paintTypesArr} from '@/composables/enum.js'

const weightValue = ref(0)
</script>

<style lang='scss' scoped>
</style>
