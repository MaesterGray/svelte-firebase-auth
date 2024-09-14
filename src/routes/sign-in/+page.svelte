<script>
    let email = $state('')
    let password = $state('')
    let signingIn = $state(false)
    import {auth} from '$lib/firebase/firebaseconfig'
    import {  signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
    import {goto} from '$app/navigation'
    
    async function handleSignIn(){
        signingIn = true
        try{
            signInWithEmailAndPassword(auth,email,password)
           // goto('/profile')
        }catch(e){
            console.error(e)
        }
        signingIn = false 
    }

    onAuthStateChanged(auth, (user) => {
		if (user) {
			goto('/profile',{replaceState:true})
		}
		})
</script>

  <div class="min-h-screen flex items-center justify-center bg-gray-900">
      <div class="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 class="text-white text-2xl mb-5">Sign In</h1>
        <input 
          type="email" 
          placeholder="Email" 
          bind:value={email} 
          class="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          bind:value={password} 
          class="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button 
          onclick={handleSignIn}
          class="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
        {#if signingIn}
            signing in ...
        {:else}
        Sign in
        {/if}
        </button>
      </div>
    </div>