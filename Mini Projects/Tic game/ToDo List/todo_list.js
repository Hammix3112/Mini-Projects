const inputField = document.querySelector('#input')
const sbtBtn = document.querySelector('#submit')
const displayDiv = document.querySelector('#display')
sbtBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const input=inputField.value.trim()
    if(input !== ''){

        //entryDiv
        const entryDiv = document.createElement('div')
        entryDiv.className = 'data-entry'

        //checkBox
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.className = 'check-Box'

        checkBox.addEventListener('change',()=>{
            if(checkBox.checked){
                entryDiv.style.background='#6f86d6'
                entryDiv.style.color='white'
                taskText.innerText=`${input} [DONE]`
            }else{
                entryDiv.style.background=''
                entryDiv.style.color=''
                taskText.innerText=`${input}`
            }

        })
        //task-text
        const taskText=document.createElement('span')
        taskText.className= 'task-text'
        taskText.textContent = `${input}`

        //delete Button
        const deleteBtn=document.createElement('button')
        deleteBtn.className = 'delete-btn'
        deleteBtn.innerHTML='Delete'

        deleteBtn.addEventListener('click',()=>{
            displayDiv.removeChild(entryDiv)
        })

        //delete Button
        const updateBtn=document.createElement('button')
        updateBtn.className = 'update-btn'
        updateBtn.innerHTML='Update'

        updateBtn.addEventListener('click',()=>{
           const newText=prompt('Enter new Text',taskText.textContent)
           if(newText !== null && newText.trim() !== ''){
            taskText.textContent = newText
           }
        })
        
        //Appending childs
        entryDiv.appendChild(checkBox)
        entryDiv.appendChild(taskText)
        entryDiv.appendChild(deleteBtn)
        entryDiv.appendChild(updateBtn)
        displayDiv.appendChild(entryDiv)               

        //to clear input field
        inputField.value=''
    }else{
        alert('Please Enter the Task!')
    }
})

            