<script >
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {auth} from '$lib/firebase/firebaseconfig'
import {goto} from '$app/navigation'
	
    let email = $state('')
	let password = $state('')
	let passwordConfirmation = $state()
	let passwordsMatch = $derived.by(()=>{
		return password=== passwordConfirmation
	})
	let loading = $state(false)

	$effect(()=>{
		console.log(email,password,passwordConfirmation,passwordsMatch)

	})

	async function handleSignUp(){
		loading = true
		if (passwordsMatch) {
			try{
			console.log('I ran')
			await	createUserWithEmailAndPassword(auth,email,password)
			goto('/profile',{replaceState:true})
		}catch(e){
			console.log(e)
		}
		}
		loading=false
		}

		onAuthStateChanged(auth, (user) => {
		if (user) {
			goto('/profile',{replaceState:true})
		}
		})
		
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-900">
	<div class="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
	  <h1 class="text-white text-2xl mb-5">Sign Up</h1>
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

	  <input 
		type="password" 
		placeholder="confirm password" 
		bind:value={passwordConfirmation} 
		class="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
	  />

	  <button 
		onclick={handleSignUp}
		class="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
	  >
	  {#if loading}
		loading
		{:else}
		Sign up 
	  {/if}
	  </button>
	</div>
  </div>