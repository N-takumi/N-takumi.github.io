#!/bin/sh

find ./ -name '*.DS_Store'



find ./ -name '*.DS_Store' | xargs rm
echo "お掃除完了しました"
