/**
 * 警告日志
 * @param projectName 项目名称
 * @param msg 消息
 */
export function warn(projectName: string, msg: string) {
    console.warn(`[${projectName} warn]:${msg}`);
}
/**
 * 异常日志
 * @param projectName 项目名称
 * @param msg 消息
 */
export function error(projectName: string, msg: string) {
    throw new Error(`[${projectName} error]:${msg}`);
}
