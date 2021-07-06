const stickermaker = (prefix, botName, ownerName) => {
	return `
「 *TUkibot* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: rosse
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *STICKER MAKER*
  │
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  └─ ❏ ${prefix}ttp`
}
exports.stickermaker = stickermaker
