/**
 * 微软SSML序列化
 * 已知和已解决的问题:
 * 1. prosody标签嵌套会导致整个句子都被最深层的prosody值影响. 解决方法: 限制不可嵌套使用,并且分别给没有设置韵律的句子添加默认韵律
 */
export default function serializeToSSML(): string;
