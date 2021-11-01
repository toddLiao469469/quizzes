### Debounce
以 `Button` 這個component為例：
在單次點擊 `with debounce` 時會發生以下事件：
1. 將`setTimeout`放入 `call stack`
2. 執行 `setTimeout` 後會在「瀏覽器的`Web API`」裡進行計時
3. 將 `setTimeout`移出`call stack`
4. 「瀏覽器的`Web API`」會監聽`setTimeout`是否計數完成，計數完成後將`setTimeout`的`call function`放入 event loop中的 `task queue`
5. 當`call stack` 清空後將`task queue`的function放入到`call stack` 
6. 執行 `setTimeout`的`call function` 

而在連續點擊`with debounce`時會將「瀏覽器的`Web API`」同一個計時器的id清除掉，並重新`setTimeout`一次。
也就是在連續點擊時這些callback都不會被執行，直到沒有新的事件輸入（也就是停止動作後），經過完整的計時週期才會將這個`callback` 放入到`call stack`執行