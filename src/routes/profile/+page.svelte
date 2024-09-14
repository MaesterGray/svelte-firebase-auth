<script >
import { onAuthStateChanged,signOut } from "firebase/auth";
import {auth} from '$lib/firebase/firebaseconfig'

import {goto} from '$app/navigation'
let loading = $state(true)
let userObject = $state({})
let signingOut = $state(false)
onAuthStateChanged(auth, (user) => {
  if (!user) {
    goto('/sign-in',{replaceState:true})
  } else {
    loading=false
    userObject = user
  //  console.log(userObject)
  }
});

async function handleSignOut(){
  signingOut = true
  await signOut(auth)
  signingOut = false
}
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-900 text-white text-lg font-bold relative">

    <button class=" absolute top-5 right-2  p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 " onclick={handleSignOut}>
      {#if signingOut}
        signing out ....
        {:else}
        Sign out
      {/if}
     
    </button>

  {#if loading}
    loading ....
    {:else}
    {`This is ${userObject.uid}'s profile'`}
  {/if}
 </div>