---
title: read
navbar: true
sidebar: false
type: 0
---
<template>
    <div class="content">
        <div v-for="item in $site.pages" :key="item.title">
            <panelBlog :title="item.title" />
            <panelBlog v-if="item.description" :descrb="item.description" />
        </div>
    </div>
    {{$site}}
</template>

