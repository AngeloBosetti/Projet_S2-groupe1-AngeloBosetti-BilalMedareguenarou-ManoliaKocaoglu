<!-- eslint-disable vue/multi-word-component-names -->
<script setup lan="ts">
import IconX from '@/components/icons/IconX.vue';


</script>

<template>
    <div class="flex flex-col gap-12 mx-5 mt-24">
        <div class="flex justify-between px-2 ">
      <RouterLink to="/parametre/ParametreCompte" ><IconX /></RouterLink>
    </div>
        <h1 class="text-2xl text-center font-bold">Conditions Générales de Vente</h1>
        <div class="flex flex-col gap-5 mt-10">
             <h3 class="text-lg font-bold">1. Acceptation des CGV</h3>
             <p>L'utilisation de la fonctionnalité payante de MySClick implique une acceptation des CGV. L'utilisateur reconnaît avoir pris connaissance des CGV et s'engage à les respecter.</p>
             <h3 class="text-lg font-bold">2. Service Payant</h3>
             <p>MySClick propose une fonctionnalités payante, notamment un envoi illimité de photos, une création illimitée de dossiers photo, et un espace créatif permettant la personnalisation du profil, des photos et des dossiers. Le tarif de la fonctionnalité payante est disponible sur l'application.</p>
             <h3 class="text-lg font-bold">3. Paiement</h3>
             <p>Le paiement de la fonctionnalité payante s'effectue selon les modalités indiquées sur l'application.</p>
             <p>Les paiements sont sécurisés. Aucune information bancaire n'est conservée par MySClick.</p>
             <h3 class="text-lg font-bold">4. Durée et Renouvellement</h3>
             <p>La fonctionnalité payante est souscrite pour une durée déterminée.</p>
             <p>L’abonnements est renouvelé automatiquement à moins d'un avis contraire de l'utilisateur au moins 48 heures avant la fin de la période en cours.</p>
             <h3 class="text-lg font-bold">5. Utilisation de la Fonctionnalité Payante</h3>
             <p>L'utilisateur s'engage à utiliser la fonctionnalité payante de manière licite et en conformité avec les lois en vigueur</p>
             <p>MySClick se réserve le droit de suspendre ou résilier l’abonnement en cas de non-respect des CGV par l'utilisateur.</p>
             <h3 class="text-lg font-bold">6. Responsabilité</h3>
             <p>MySClick ne peut être tenu responsable des conséquences résultant de l'utilisation de la fonctionnalité payante par l'utilisateur.</p>
             <h3 class="text-lg font-bold">7. Modification des CGV</h3>
             <p>MySClick se réserve le droit de modifier les présentes CGV à tout moment. Les utilisateurs seront informés des modifications par tout moyen jugé approprié.</p>
             <p>En acceptant ces CGV, l'utilisateur reconnaît avoir lu et compris l'ensemble des dispositions qui les régissent.</p>

        </div>
    </div>
    
</template>